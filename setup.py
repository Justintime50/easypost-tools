import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

REQUIREMENTS = [
    'beautifulsoup4 == 4.*',
    'easypost == 7.*',
    'flask == 2.*',
    'Pillow == 9.*',
    'PyPDF2 == 1.26.*',
    'python-dotenv == 0.19.*',
    'pyzbar == 0.1.*',
    'slackclient == 2.*',
]

DEV_REQUIREMENTS = [
    'black == 22.*',
    'flake8 == 4.*',
    'isort == 5.*',
]

setuptools.setup(
    name='easypost-tools',
    version='0.1.0',
    description=(
        'A MASSIVE collection of tools and examples for EasyPost spanning over C#, Golang, Node, PHP, Python, Ruby,'
        ' HTML, and Shell.'
    ),
    long_description=long_description,
    long_description_content_type="text/markdown",
    url='http://github.com/justintime50/easypost-tools',
    author='Justintime50',
    license='MIT',
    packages=setuptools.find_packages(
        exclude=[
            'examples',
            'test',
        ]
    ),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    install_requires=REQUIREMENTS,
    extras_require={
        'dev': DEV_REQUIREMENTS,
    },
    python_requires='>=3.7, <4',
)
