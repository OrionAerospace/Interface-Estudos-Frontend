"""First: table_creation

Revision ID: 6c63101f4b94
Revises: 
Create Date: 2023-08-10 13:10:43.745158

"""
from alembic import op
import sqlalchemy as sa
import datetime

# revision identifiers, used by Alembic.
revision = '6c63101f4b94'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table('users',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('username', sa.String(length=86), nullable=False),
    sa.Column('name', sa.String(length=86), nullable=False),
    sa.Column('email', sa.String(length=86), nullable=False),
    sa.Column('password', sa.String(length=128), nullable=False),
    sa.Column('created_on', sa.DateTime(), default=datetime.datetime.now()),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )


def downgrade():
    op.drop_table('users')